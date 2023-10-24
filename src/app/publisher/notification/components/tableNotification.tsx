import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const invoices = [
    {
      invoice: 
     ' تصاريح مواقف رقمية مجانية في دبي لكبار المواطنين وأصحاب الهمم',
      paymentStatus: "Mon, Sep 4",
      totalAmount: "250.00",
      
    },
    {
      invoice: "320.000 مسكن يستفيدون من المرحلة الرابعة لـ «محمد بن راشد آل مكتوم للطاقة الشمسية»",
      paymentStatus: "Tue, Aug 29",
      totalAmount: "150.00",
     
    },
    {
      invoice: "حمدان بن محمد: اقتصاد دبي حقق نمواً بـ 2.8% وبقيمة إجمالية 111.3 مليار درهم",
      paymentStatus: "Thu, Sep 7",
      totalAmount: "450.00",
   
    },
    {
      invoice: "تصاريح مواقف رقمية مجانية في دبي لكبار المواطنين وأصحاب الهمم",
      paymentStatus: "Thu, Sep 14",
      totalAmount: "450.00",
     
    },
    
  ]
  
  export function TableDemo() {
    return (
      <Table>
        <TableCaption>A list of your recent Notification.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[800px]">Article</TableHead>
            <TableHead className="w-[300px]">Date {'(UTC)'}</TableHead>
            <TableHead>User Clicks</TableHead>
            
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell className="text-right">{invoice.totalAmount}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  