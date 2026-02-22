import { Star, Languages, GraduationCap } from "lucide-react";

interface TeacherCardProps {
    name: string;
    qualification: string;
    experience: string;
    languages: string[];
    ijazah: boolean;
}

export default function TeacherCard({ name, qualification, experience, languages, ijazah }: TeacherCardProps) {
    return (
        <div className="card group hover:border-primary/20">
            <div className="w-24 h-24 bg-primary/5 rounded-full mx-auto mb-6 flex items-center justify-center text-primary/30 border border-primary/10">
                <UserIcon />
            </div>
            <div className="text-center">
                <h3 className="text-xl font-bold mb-2 text-primary">{name}</h3>
                {ijazah && (
                    <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-[10px] font-extrabold px-3 py-1 rounded-full mb-4 uppercase tracking-tighter">
                        <Star size={10} fill="currentColor" />
                        <span>Ijazah Certified</span>
                    </span>
                )}
            </div>

            <div className="space-y-4 mt-6 text-sm">
                <div className="flex items-start gap-4">
                    <div className="bg-primary/5 p-2 rounded-lg text-primary">
                        <GraduationCap size={18} />
                    </div>
                    <div>
                        <div className="text-[10px] uppercase font-bold text-[var(--foreground)]/40 tracking-wider">Qualification</div>
                        <div className="text-[var(--foreground)]/80 font-medium">{qualification}</div>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="bg-primary/5 p-2 rounded-lg text-primary">
                        <Star size={18} />
                    </div>
                    <div>
                        <div className="text-[10px] uppercase font-bold text-[var(--foreground)]/40 tracking-wider">Experience</div>
                        <div className="text-[var(--foreground)]/80 font-medium">{experience}</div>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="bg-primary/5 p-2 rounded-lg text-primary">
                        <Languages size={18} />
                    </div>
                    <div>
                        <div className="text-[10px] uppercase font-bold text-[var(--foreground)]/40 tracking-wider">Languages</div>
                        <div className="text-[var(--foreground)]/80 font-medium">{languages.join(", ")}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function UserIcon() {
    return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
        </svg>
    );
}
