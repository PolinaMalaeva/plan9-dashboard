import Breadcrumb from "@/p9ui/components/Breadcrumbs/Breadcrumb";
import ChartFour from "@/p9ui/components/Charts/ChartFour";
import ChartOne from "@/p9ui/components/Charts/ChartOne";
import ChartThree from "@/p9ui/components/Charts/ChartThree";
import ChartTwo from "@/p9ui/components/Charts/ChartTwo";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Chart Page | Next.js E-commerce Dashboard Template",
  description: "This is Chart Page for TailAdmin Next.js",
  // other metadata
};

const Chart = () => {
  return (
    <>
      <Breadcrumb pageName="Chart" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-12">
          <ChartFour />
        </div>
        <ChartOne />
        <ChartTwo />
        <ChartThree />
      </div>
    </>
  );
};

export default Chart;
