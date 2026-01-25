import { supabase } from "@/lib/supabase";
import { Dica } from "../types";

export async function getTips(): Promise<Dica[]> {
    try {
        const { data, error } = await supabase
            .from("dicas_destaques")
            .select("*")
            .eq("ativo", true)
            .order("created_at", { ascending: false });

        if (error) {
            console.error("Error fetching tips:", error);
            return [];
        }

        return data || [];
    } catch (err) {
        console.error("Unexpected error fetching tips:", err);
        return [];
    }
}
