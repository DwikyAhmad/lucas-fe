import { Button } from "../ui/button";

export default function Dashboard() {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <div>
                <div className="mb-10">
                    <h1 className="text-center font-bold text-2xl">
                        Admin Dashboard
                    </h1>
                    <h2 className="text-center font-semibold">LUCAS DJAJA</h2>
                </div>
                <div className="flex gap-4 text-white font-semibold">
                    <div
                        className="bg-brightGreen w-[200px] h-[200px] flex justify-center items-center rounded-xl 
                    hover:brightness-75 transition-all duration-200 hover:cursor-pointer"
                    >
                        <p>Add New Categories</p>
                    </div>
                    <div
                        className="bg-orange w-[200px] h-[200px] flex justify-center items-center rounded-xl 
                    hover:brightness-75 transition-all duration-200 hover:cursor-pointer"
                    >
                        <p>Edit Products</p>
                    </div>
                    <div
                        className="bg-brightGreen w-[200px] h-[200px] flex justify-center items-center rounded-xl 
                    hover:brightness-75 transition-all duration-200 hover:cursor-pointer"
                    >
                        <p>List Products</p>
                    </div>
                </div>
                <div className="flex justify-end mt-10">
                    <Button variant={"destructive"} className="w-24">Logout</Button>
                </div>
            </div>
        </div>
    );
}
