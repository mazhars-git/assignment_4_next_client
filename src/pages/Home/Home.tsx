import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <h1 className="text-red-400 text-4xl font-bold">This is Home page</h1>
      <Button>Submit</Button>
    </div>
  );
};

export default Home;
