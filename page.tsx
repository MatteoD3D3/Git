import Image from "next/image";
import HelloWorld from "./HelloWorld";
import Comment from "./Comment";
import StateExample from "./StateExample";
export default function Home() {
  var authorObj = {name: "Robo",
        avatarUrl:"https://gravatar.com/avatar/748506960d38cfe99fbe6819b55b916e?s=200&d=robohash&r=x"
  }
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Comment name={authorObj.name} avatarUrl={authorObj.avatarUrl}
        text="Great article!" date = "Oct 20" /> 
        
      </main>
    </div>
  );
}
