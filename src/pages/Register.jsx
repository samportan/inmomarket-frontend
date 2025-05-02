import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { FcGoogle } from "react-icons/fc" //

//redirect to login page when pressed register button

function handleRegister() {
    // Handle registration logic here
    // For example, you can redirect to the login page after successful registration
    window.location.href = "/login";
}

export default function Register() {
  return (
    <div className="flex h-screen">
      {/* Left Section: Login Form */}
      <div className="flex flex-1 items-center justify-center bg-gray-100">
        <Card className="w-[400px] p-6">
          <h2 className="text-2xl font-bold mb-4">Registrate</h2>
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
              <Label htmlFor="terms" className="text-sm text-gray-600">
                Acepto los <a href="/terms" className="text-blue-500">términos y condiciones</a>
              </Label>
            </div>
            <Button className="w-full" onClick={handleRegister}>Registrar</Button>
            <Button className="w-full flex items-center justify-center space-x-2">
              <FcGoogle size={20} /> {/* Google Icon */}
              <span>Ingresar con google</span>
            </Button>
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
          <p className="text-gray-600">El mejor lugar para encontrar o vender tu casa.</p>
        </div>
      </div>
    </div>
  )
}