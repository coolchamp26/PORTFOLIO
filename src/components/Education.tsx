interface EducationItem {
    institution: string;
    degree: string;
    score: string;
    year?: string;
    icon: "university" | "school" | "book";
}

const educationData: EducationItem[] = [
    {
        institution: "Netaji Subhas University of Technology (NSUT)",
        degree: "B.Tech in Computer Science Engineering with Artificial Intelligence",
        score: "CGPA: 8.55",
        year: "Current | 4th Sem",
        icon: "university",
    },
    {
        institution: "Sardar Patel Vidyalaya",
        degree: "Class 12th (2024) (Stream: PCM with CS)",
        score: "95.6%",
        icon: "school",
    },
    {
        institution: "Birla Vidya Niketan",
        degree: "Class 10th (2022)",
        score: "98%",
        icon: "book",
    },
];

const Education = () => {
    return (
        <section id="education" className="py-12 md:py-20 px-6 md:px-12 bg-foreground text-background">
            <div className="container-fluid max-w-screen-2xl mx-auto">
                <div className="mb-16 border-t-8 border-background pt-8">
                    <h2 className="text-large text-background">EDUCATION</h2>
                </div>

                <div className="space-y-16">
                    {educationData.map((item) => (
                        <div
                            key={item.institution}
                            className="flex flex-col md:grid md:grid-cols-12 gap-12 border-t border-background/20 pt-12 animate-impact opacity-0 fill-mode-forwards"
                        >
                            <div className="md:col-span-1 hidden md:block" />

                            <div className="md:col-span-6">
                                <h3 className="text-4xl md:text-5xl font-bold mb-4 leading-[0.9] tracking-tighter normal-case">
                                    {item.institution}
                                </h3>
                                <p className="text-xl md:text-2xl font-serif italic opacity-70">
                                    {item.degree}
                                </p>
                                {item.year && (
                                    <p className="text-xs uppercase tracking-[0.4em] mt-6 opacity-40 font-bold whitespace-nowrap">
                                        Timeline: {item.year}
                                    </p>
                                )}
                            </div>

                            <div className="md:col-span-1 hidden md:block" />

                            <div className="md:col-span-4 flex flex-col items-start md:items-end justify-center">
                                <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 mb-2">
                                    {item.icon === "university" ? "CGPA" : "Score"}
                                </p>
                                <p className="text-5xl md:text-6xl font-bold tracking-[-0.08em] leading-none">
                                    {item.score.split(': ').pop()}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;

