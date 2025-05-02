import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { FcGoogle } from "react-icons/fc" // Import Google icon from react-icons

export default function Login() {
  return (
    <div className="flex h-screen">
      {/* Left Section: Login Form */}
      <div className="flex flex-1 items-center justify-center bg-gray-100">
        <Card className="w-[400px] p-6">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <div className="space-y-4">
            <div>
              <Label>Correo</Label>
              <Input type="email" placeholder="you@example.com" />
            </div>
            <div>
              <Label>Contraseña</Label>
              <Input type="password" placeholder="••••••••" />
            </div>
            <Button className="w-full">Ingresar</Button>
            <Button className="w-full flex items-center justify-center space-x-2">
              <FcGoogle size={20} /> {/* Google Icon */}
              <span>Ingresar con google</span>
            </Button>
          </div>
            <div className="mt-4 text-center text-sm text-gray-600">
                <p>¿No tienes una cuenta? <a href="/register" className="text-blue-500">Regístrate</a></p>
            </div>
        </Card>
      </div>

      {/* Right Section: Logo, Title, Info */}
      <div className="flex flex-1 flex-col items-center justify-center bg-white">
        <img
          src="/images/inmomarket-logo-nobg.png"
          alt="InmoMarket Logo"
          className="w-32 h-32 mb-4"
        />
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Bienvenido de vuelta!</h1>
          <p className="text-gray-600">El mejor lugar para encontrar o vender tu casa.</p>
        </div>
      </div>
    </div>
  )
}
