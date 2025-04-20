import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Card, CardContent } from "@/components/ui/card";
import loginImg from "../assets/images/lgoin.png";
import { NavLink } from "react-router-dom";

const formSchema = z.object({
  email: z.string().email({
    message: "Email must be at least 2 characters",
  }),
  password: z.string().min(6),
});

const Login = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "xyz@gmail.com",
      password: "xyz123",
    },
  });
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <Card className="overflow-hidden">
          <CardContent className="grid md:grid-cols-2 gap-4">
            <div>
              <div className="flex flex-col items-center text-center py-5">
                <h1 className="text-3xl font-bold">Welcome back!!</h1>
                <p className="text-balance text-muted-foreground">
                  Login to your account
                </p>
              </div>

              <Form {...form}>
                <form className="space-y-8">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="m@gmail.example" {...field} />
                        </FormControl>
                        <FormDescription>
                          This is your public display name.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input placeholder="password" {...field} />
                        </FormControl>
                        <FormDescription>
                          This is your public display name.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button className="w-full" type="submit">
                    Login
                  </Button>
                </form>
              </Form>
              <div className="text-center text-sm pt-2">
                Don&apos;t have an account?{" "}
                <NavLink to="/signup" className="underline text-sky-400">
                  Signup
                </NavLink>
              </div>
            </div>

            <div className="relative hidden bg-muted md:block">
              <img
                src={loginImg}
                alt="Image"
                className="absolute inset-0 w-full object-cover dark:brightness-[0.2] dark:grayscale"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
