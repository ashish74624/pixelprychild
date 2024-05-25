import Navbar from "@/components/Navbar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import toast, { Toaster } from 'react-hot-toast';
import Btn from "@/components/Btn";

export default function Home() {
  const notify = () => toast('Added to Cart');
  const image =[1,2,3,4];
  const sale =['a','b','c','d'];
  return (
    <main className="">
      <Navbar/>
      <div className="w-full h-max bg-black">

      <Carousel className="w-[80vw] mx-auto h-96 bg-blue-300">
        <CarouselContent>
          {
            image.map((item)=>(
            <CarouselItem key={item}>
              <img className="w-full h-96" src={`https://tech-nexus.vercel.app/image/ashishkumar74624@gmail.com/child/${item}`} alt="img"/>
            </CarouselItem>
            ))
          }
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      </div>

      <section className="w-full h-max mt-8">
        <h1 className="text-black mx-auto text-6xl font-semibold w-max mb-10">Shop</h1>
          <div className="grid grid-cols-2 gap-4 mx-auto w-max ">
            {
              sale.map((item)=>(
                <Card key={item} className="w-max h-max py-6 bg-slate-300">
              <CardContent className="w-max h-max">
                <img className="w-64 h-64" src={`https://tech-nexus.vercel.app/image/ashishkumar74624@gmail.com/child/${item}`} alt="img"/>
              </CardContent>
              <CardFooter>
                <Btn/>
              </CardFooter>
            </Card>
              ))
            }
            

          </div>
      </section>
            <Toaster />
    </main>
  );
}
