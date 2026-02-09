"use client"

import { FormError } from "@/app/shared/components/form/FormError"
import { Button } from "@/app/shared/components/ui/Button"
import { Card } from "@/app/shared/components/ui/Card"
import { Input } from "@/app/shared/components/ui/Input"
import { useForm } from "react-hook-form"

type LoginForm = {
  email: string
  password: string
}

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>()

  const onSubmit = async (data: LoginForm) => {
    console.log(data)
  }

  return (
    <Card>
      <h2 className="mb-2 text-center text-2xl font-semibold text-gray-900">
        Login to your account
      </h2>

      <p className="mb-6 text-center text-sm text-gray-600">
        Enter your credentials to continue
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
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
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Password
          </label>
          <Input
            type="password"
            placeholder="Enter your password"
            error={!!errors.password}
            {...register("password", {
              required: "Password is required",
            })}
          />
          <FormError message={errors.password?.message} />
        </div>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Login"}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-600">
        Don’t have an account?
        <a
          href="/auth/register"
          className="ml-1 font-medium text-gray-900 hover:underline"
        >
          Sign up
        </a>
      </p>
    </Card>
  )
}
