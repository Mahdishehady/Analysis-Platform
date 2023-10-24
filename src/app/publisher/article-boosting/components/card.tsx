

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface Props {
  input1: string;
  input2: string;
}
export default function AddCrad({input1,input2} : Props)
{

    return(

        <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className=" text-xl font-bold">{ input1.slice(0,20) + "..."}</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <path d="M2 10h20" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xl font-bold">{input2}</div>
                    <p className="text-xl font-bold">
                    
                    </p>
                  </CardContent>
                </Card>
    )
}