import React, { useEffect, useRef, useState } from 'react'
import { View, Animated, StyleSheet, Vibration } from 'react-native'
import Svg, { Circle, G } from 'react-native-svg'

interface CircularProgressProps {
  size: number
  strokeWidth: number
  duration: number
  color: string
  backgroundColor: string
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle)

export default function CircularProgress({
  size,
  strokeWidth,
  duration,
  color,
  backgroundColor,

}: CircularProgressProps) {
  const [progress, setProgress] = useState(100)
  const [phrase, setPhrase] = useState('Iniciar')
  const [isRunning, setIsRunning] = useState(false)
  const [key, setKey] = useState(0) // Estado para forçar o reset
  const animatedValue = useRef(new Animated.Value(100)).current
  const opacity = useRef(new Animated.Value(1)).current
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const strokeDashoffset = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [circumference, 0],
  })

  const handleCompletion = () => {
    Vibration.vibrate(1000)
    setPhrase('Concluído')
    setIsRunning(false)

    Animated.timing(opacity, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start()
    })

    setProgress(100)
    animatedValue.setValue(100)

  }

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    setProgress(100) // Reinicia o progresso para 100
    animatedValue.setValue(100) // Reinicia o valor animado para 100

    if (duration > 0) {
      setIsRunning(true)
      setPhrase('Inspire')

      intervalRef.current = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev - (100 / duration)
          if (newProgress <= 0) {
            clearInterval(intervalRef.current!)
            handleCompletion()
            return 0
          }
          return newProgress
        })
      }, 1000)

      return () => clearInterval(intervalRef.current!)
    }
  }, [key]) // Dispara o useEffect ao alterar o estado "key"

  useEffect(() => {
    setKey(prevKey => prevKey + 1) // Força o reset alterando o valor de "key"
  }, [duration]) // Quando a "duration" muda, força o reset

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: progress,
      duration: 1000,
      useNativeDriver: true,
    }).start()
  }, [progress])

  useEffect(() => {
    if (isRunning) {
      const phraseInterval = setInterval(() => {
        Animated.timing(opacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start(() => {
          setPhrase(prevPhrase => (prevPhrase === 'Inspire' ? 'Expire' : 'Inspire'))

          Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }).start()
        })
      }, 4000)

      return () => clearInterval(phraseInterval)
    }
  }, [isRunning])

  return (
    <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <G rotation="-90" origin={`${size / 2}, ${size / 2}`}>
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={backgroundColor}
            strokeWidth={strokeWidth}
            fill="none"
          />
          <AnimatedCircle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </G>
      </Svg>

      {progress > 0 && (
        <Animated.View style={{ opacity, position: 'absolute' }}>
          <Animated.Text style={[styles.phraseText, { color }]}>{phrase}</Animated.Text>
        </Animated.View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  phraseText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
})
