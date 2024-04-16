import React from "react";
import { useParamsModels } from "@/business.InterfaceLayer";
import { Inter } from "next/font/google";
import ClassParamEditor from "@/UI/ClassParamEditor";
import FunctionalParamEditor from "@/UI/FunctionalParamEditor";

const inter = Inter({ subsets: ["latin"] });

const Home: React.FC = () => {
  const { paramsModels, isLoading, isError } = useParamsModels();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  const { params, models } = paramsModels;
  const selectedModel = models.length > 0 ? models[0] : { paramValues: [] };

  return (
    <main
      className={`2xl:container mx-[20px] 2xl:px-2xl flex flex-col gap-4 justify-center items-center h-[95vh] ${inter.className}`}
    >
      <div className="w-[50%] bg-gray-500"></div>
      <ClassParamEditor params={params} model={selectedModel} />
      <FunctionalParamEditor paramsModels={paramsModels} />
    </main>
  );
};

export default Home;
