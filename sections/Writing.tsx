import { Link2 } from "lucide-react";
import Link from "next/link";

function Writing() {
  return (
    <section
      className="w-full flex justify-center items-center p-6 lg:p-10"
      id="writing"
    >
      <div className="w-full h-full flex flex-col gap-10 items-start justify-center">
        <div>
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            writing i like
          </h2>
        </div>
        <div>
          <Link
            href={
              "https://www.sycamoreinstitute.org/post/ai-as-a-catalyst-for-a-circular-economy"
            }
            target="_blank"
          >
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight flex flex-wrap lg:flex-inline items-center hover:underline">
              <Link2 className="mr-2" /> ai as a catalyst for a circular economy
            </h3>
          </Link>
        </div>
        <div>
          <Link
            href={
              "https://docs.google.com/document/d/19tZdXgttIagicUsGpgtavNd12t4a_8OkT0HQUgq2Ycw/edit?usp=sharing"
            }
            target="_blank"
          >
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight flex flex-wrap lg:flex-inline items-center hover:underline">
              <Link2 className="mr-2" /> questioning missionary objectives
              within the yoruba
            </h3>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Writing;
