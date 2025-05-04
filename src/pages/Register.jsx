import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { FcGoogle } from "react-icons/fc"

function handleRegister() {
  // Simulate successful registration
  window.location.href = "/login"
}

export default function Register() {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-white dark:bg-zinc-900 text-black dark:text-white">
      {/* Left Section: Register Form */}
      <div className="flex flex-1 items-center justify-center bg-gray-100 dark:bg-zinc-800 p-4">
        <Card className="w-full max-w-md p-6 bg-white dark:bg-zinc-900">
          <h2 className="text-2xl font-bold mb-4">Regístrate</h2>
          <div className="space-y-4">
            <div>
              <Label>Nombre completo</Label>
              <Input type="text" placeholder="Juan Perez" />
            </div>
            <div>
              <Label>Correo</Label>
              <Input type="email" placeholder="you@example.com" />
            </div>
            <div>
              <Label>Contraseña</Label>
              <Input type="password" placeholder="••••••••" />
            </div>
            <div>
              <Label>Repetir Contraseña</Label>
              <Input type="password" placeholder="••••••••" />
            </div>
            <div>
              <Label>Número</Label>
              <Input type="text" placeholder="(000) 000-0000" />
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="terms" className="h-4 w-4" />
              <Label htmlFor="terms" className="text-sm text-gray-600 dark:text-gray-300">
                Acepto los{" "}
                <a href="/terms" className="text-blue-500 dark:text-blue-400">
                  términos y condiciones
                </a>
              </Label>
            </div>
            <Button className="w-full" onClick={handleRegister}>
              Registrar
            </Button>
            <Button className="w-full flex items-center justify-center space-x-2">
              <FcGoogle size={20} />
              <span>Ingresar con Google</span>
            </Button>
          </div>
        </Card>
      </div>

      {/* Right Section: Logo and Info */}
      <div className="flex flex-1 flex-col items-center justify-center bg-white dark:bg-zinc-900 p-4">
        <div className="bg-transparent dark:bg-white rounded-full p-4 mb-4">
          <img
            src="/images/inmomarket-logo-nobg.png"
            alt="InmoMarket Logo"
            className="w-24 h-24 md:w-32 md:h-32"
          />
        </div>
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
            El mejor lugar para encontrar o vender tu casa.
          </p>
        </div>
      </div>
    </div>
  )
}
