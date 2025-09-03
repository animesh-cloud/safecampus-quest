import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const StudentRegister = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    institution: "",
    address: "",
    standard: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: {
          role: "student",
          name: form.name,
          institution: form.institution,
          address: form.address,
          standard: form.standard,
        },
      },
    });

    if (error) {
      setError(error.message);
    } else {
      alert("Student registered successfully! Please log in.");
      navigate("/login");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <Card className="w-[400px] p-6">
        <CardContent>
          <h2 className="text-2xl font-bold mb-4">Student Registration</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label>Name</Label>
              <Input name="name" value={form.name} onChange={handleChange} required />
            </div>
            <div>
              <Label>School/Institution</Label>
              <Input name="institution" value={form.institution} onChange={handleChange} required />
            </div>
            <div>
              <Label>Institution Address</Label>
              <Input name="address" value={form.address} onChange={handleChange} required />
            </div>
            <div>
              <Label>Standard</Label>
              <Input name="standard" value={form.standard} onChange={handleChange} required />
            </div>
            <div>
              <Label>Email</Label>
              <Input type="email" name="email" value={form.email} onChange={handleChange} required />
            </div>
            <div>
              <Label>Password</Label>
              <Input type="password" name="password" value={form.password} onChange={handleChange} required />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button type="submit" className="w-full">Register</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentRegister;
