import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc"; // Import Google icon from react-icons

function handleLogin() {
  // Handle registration logic here
  // For example, you can redirect to the login page after successful registration
  window.location.href = "/";
}

export default function Login() {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-white dark:bg-zinc-900 text-black dark:text-white">
      {/* Left Section: Login Form */}
      <div className="flex flex-1 items-center justify-center bg-gray-100 dark:bg-zinc-800 p-4">
        <Card className="w-full max-w-md p-6 bg-white dark:bg-zinc-900">
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
            <Button
              className="w-full flex items-center justify-center space-x-2"
              onClick={handleLogin}
            >
              <FcGoogle size={20} />
              <span>Ingresar con Google</span>
            </Button>
          </div>
          <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
            <p>
              ¿No tienes una cuenta?{" "}
              <a href="/register" className="text-blue-500 dark:text-blue-400">
                Regístrate
              </a>
            </p>
          </div>
        </Card>
      </div>

      {/* Right Section: Logo, Title, Info */}
      <div className="flex flex-1 flex-col items-center justify-center bg-white dark:bg-zinc-900 p-4">
        <div className="bg-transparent dark:bg-white rounded-full p-4">
          <img
            src="/images/inmomarket-logo-nobg.png"
            alt="InmoMarket Logo"
            className="w-24 h-24 md:w-32 md:h-32 mb-4"
          />
        </div>
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Bienvenido de vuelta!
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
            El mejor lugar para encontrar o vender tu casa.
          </p>
        </div>
      </div>
    </div>
  );
}
