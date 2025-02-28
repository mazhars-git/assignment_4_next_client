import { Button } from "@/components/ui/button";

const HeaderPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <h1 className="text-red-400 text-4xl font-bold">This is Header page</h1>
      <Button>Submit</Button>
    </div>
  );
};

export default HeaderPage;
