
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import React, { ChangeEvent, ReactNode, useState } from "react"

interface DialogDemoProps {
    handleclick: () => void;
    children: ReactNode;
    input2: string;
    input3: string;
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  }
  

export function DialogDemo({ handleclick, children, input2, input3, handleInputChange }:DialogDemoProps) {



    const [showNewTeamDialog, setShowNewTeamDialog] = React.useState(false)
    return (
        <Dialog open={showNewTeamDialog} onOpenChange={setShowNewTeamDialog}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Create Article Boost</DialogTitle>

                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Segment


                        </Label>
                        <div className="col-span-3">
                            <Select >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a plan" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="free">
                                        <span className="font-medium">Rich Users
                                        </span>
                                    </SelectItem>
                                    <SelectItem value="pro">
                                        <span className="font-medium">Sports Fanatics</span>
                                    </SelectItem>
                                    <SelectItem value="new">
                                        <span className="font-medium">Newsletter Subscribers
                                        </span>
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        {/* <Input id="name" name="input1"
        value={input1}
        onChange={handleInputChange} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4"> */}
                        <Label htmlFor="username" className="text-right">
                            ArticleUrl
                        </Label>
                        <Input id="username" name="input2"
                            value={input2}
                            onChange={handleInputChange} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            End Date
                        </Label>
                        <Input id="username" name="input3"
                            value={input3}
                            onChange={handleInputChange} className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline" onClick={() => setShowNewTeamDialog(false)}>
                        Cancel
                    </Button>
                    <Button type="submit" onClick={() => {
                        handleclick()
                        setShowNewTeamDialog(false)
                    }}>Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
