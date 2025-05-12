import { Search } from "lucide-react";
import { Label } from "./ui/label";
import { SidebarInput } from "./ui/sidebar";

export function SearchForm(props) {
    return (
        <form {...props}>
            <div className="relative">
                <Label htmlFor="search" className="sr-only">
                    Search
                </Label>
                <SidebarInput
                    id="search"
                    placeholder="Buscar..."
                    className="h-8 pl-7"
                    />
                    <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
            </div>
        </form>
    )
}