import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
} from "firebase/auth"
import { auth, db } from "../services/firebase/FireBaseConnection"
import { doc, onSnapshot, setDoc } from "firebase/firestore"
import { User } from "../utils/types"

export default function useAuth() {
  function errorOutput(code: string) {
    switch (code) {
      case "auth/email-already-in-use":
        return "Este email já está em uso"
      case "auth/weak-password":
        return "Sua senha deve ter no mínimo 6 caracteres"
      case "auth/missing-password":
        return "Senha inválida"
      case "auth/invalid-email":
        return "Email inválido"
      case "auth/user-not-found":
        return "Usuário não encontrado"
      case "auth/wrong-password":
        return "Senha incorreta"
      default:
        return "Erro desconhecido"
    }
  }

  async function register(email: string, password: string, name: string) {
    try {
      // Cria o usuário no Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user

      // Salva os dados do usuário no Firestore
      await setDoc(doc(db, "users", user.uid), {
        name: name,
      })

      return user
    } catch (error: any) {
      return errorOutput(error.code)
    }
  }

  async function signIn(email: string, password: string) {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password)
      return user
    } catch (error: any) {
      return errorOutput(error.code)
    }
  }

  async function signOut() {
    firebaseSignOut(auth)
  }

  // Função fetchUser atualizada para usar onSnapshot
  function fetchUser(uid: string, onUserChange: (userData: any) => void) {
    try {
      const dbRef = doc(db, 'users', uid)

      // Observa as mudanças no documento em tempo real
      const unsubscribe = onSnapshot(dbRef, (docSnap) => {
        if (docSnap.exists()) {
          onUserChange(docSnap.data()) // Passa os dados atualizados para o callback
        } else {
          console.log("Documento não encontrado!")
          onUserChange(null) // Se o documento não existir, passa null para o callback
        }
      }, (error) => {
        console.error("Erro ao buscar o nome do usuário:", error)
        onUserChange(null)
      })

      // Retorna a função de cancelamento da observação
      return unsubscribe
    } catch (error) {
      console.error("Erro ao configurar o onSnapshot:", error)
      return () => { }
    }
  }

  function getUserWithoutSensitive(user: User | null): Partial<User> | null {
    if (!user) return null
    const { email, uid, ...rest } = user
    return rest
  }


  return {
    register,
    signIn,
    signOut,
    fetchUser,
    getUserWithoutSensitive
  }
}