"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock, User } from "lucide-react"
import { useForm } from "react-hook-form"
import { BASE_URL } from "@/config/settings"



interface LoginIn {
   email:string,
   password:string
}


export default function AdminLogin() {
  const router = useRouter()
  const {handleSubmit , register, formState:{errors, isLoading} } = useForm<LoginIn>();
  // const [message,setMessage] = useState("");

  const onSubmit = async (data: LoginIn) => {
    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      const token = result?.data?.token;
      const status= result?.success
      if (status) {
            globalThis.sessionStorage.setItem('api_key_token', token)
            router.push("/admin/dashboard");
        } else {
          router.push("/admin/login");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };


  return (
    <div className="min-h-screen bg-primary/10 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-dark">Admin Login</CardTitle>
          <p className="text-dark/70">Access the admin dashboard</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-dark/70 mb-1">
                Email Address
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-dark/50" />
                <Input
                  id="username"
                  type="email"
                  {...register("email", { required: "Username is required" })}
                  className="pl-10"
                  placeholder="Enter username"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-dark/70 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-dark/50" />
                <Input
                  id="password"
                  type={"password"}
                  {...register("password", { required: "Password is required" })}
                  className="pl-10 pr-10"
                  placeholder="Enter password"
                  required
                />
                <button
                  type="button"
                  // onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-dark/50 hover:text-dark"
                >
                  {/* {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />} */}
                  {errors.email && <p>{}</p>}
                </button>
              </div>
            </div>

            <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          <div className="mt-6 p-4 bg-primary/20 rounded-lg">
             {/* {message && <p className="text-sm text-dark/70 font-medium">{message}</p> } */}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
