import { Head, Link } from "aleph/react";



export default function Wallet() {
  return (
    <div className="w-9/10 max-w-150 mx-auto mt-15">
      <Head>
        <title>Todos</title>
        <meta name="description" content="A todos app powered by Aleph.js" />
      </Head>
      <h1 className="flex items-center justify-between text-5xl font-200">
        <span>Todos</span>
        {todos.length > 0 && (
          <em className="text-3xl text-gray-300">{todos.filter((todo) => todo.completed).length}/{todos.length}</em>
        )}
      </h1>
      </div>
    
  );
}
