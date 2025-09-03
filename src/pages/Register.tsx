import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Register() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-[400px] p-6 shadow-lg">
        <CardContent className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-center mb-4">Register As</h1>
          <Button onClick={() => navigate("/register/student")}>
            Student
          </Button>
          <Button onClick={() => navigate("/register/admin")}>
            Admin
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
