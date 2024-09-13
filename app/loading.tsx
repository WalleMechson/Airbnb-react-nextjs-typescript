import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center w-full h-full pt-[20px]">
      <Loader2 className="h-7 w-7 text-zin-500 animate-spin my-4" />
    </div>
  )
}
