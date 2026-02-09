"use client"

import { FormError } from "@/app/shared/components/form/FormError"
import { Button } from "@/app/shared/components/ui/Button"
import { Card } from "@/app/shared/components/ui/Card"
import { Input } from "@/app/shared/components/ui/Input"
import { useToast } from "@/app/shared/components/ui/ToastProvider"
import { useForm } from "react-hook-form"

type RegisterForm = {
  email: string
  password: string
}

export default function RegisterPage() {
  const { showToast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterForm>()

  const onSubmit = async (data: RegisterForm) => {
    try {
      // later connect backend
      console.log(data)

      showToast("Account created successfully", "success")
    } catch {
      showToast("Registration failed", "error")
    }
  }

  return (
    <Card>
      <h2 className="mb-2 text-center text-2xl font-semibold text-gray-900">
        Create an account
      </h2>

      <p className="mb-6 text-center text-sm text-gray-600">
        Sign up to get started
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <Input
            type="email"
            placeholder="you@example.com"
            error={!!errors.email}
            {...register("email", {
              required: "Email is required",
            })}
          />
          <FormError message={errors.email?.message} />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <Input
            type="password"
            placeholder="Create a password"
            error={!!errors.password}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Minimum 6 characters",
              },
            })}
          />
          <FormError message={errors.password?.message} />
        </div>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creating..." : "Register"}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-600">
        Already have an account?
        <a href="/auth/login" className="ml-1 font-medium text-gray-900 hover:underline">
          Login
        </a>
      </p>
    </Card>
  )
}
