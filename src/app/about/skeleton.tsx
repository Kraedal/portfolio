export default function AboutSkeleton() {
    return (
        <main>
            <div className="mt-32 mx-8 mb-32 grid grid-cols-1 md:grid-cols-2 gap-4 bg-black/70">
                <section className="col-span-1 min-h-96 bg-muted lg:ml-28">
                    {/* Image skeleton */}
                    <div className="w-[300px] h-[300px] rounded-full bg-gray-700/50 animate-pulse" />
                    
                    {/* About section skeletons */}
                    <div className="mx-5 my-4 h-6 w-32 bg-gray-700/50 animate-pulse rounded" />
                    <div className="mx-5 mb-8 h-8 w-48 bg-gray-700/50 animate-pulse rounded" />
                    
                    {/* Paragraph skeletons */}
                    <div className="mx-5 space-y-4">
                        <div className="h-4 bg-gray-700/50 animate-pulse rounded" />
                        <div className="h-4 bg-gray-700/50 animate-pulse rounded" />
                        <div className="h-4 bg-gray-700/50 animate-pulse rounded w-3/4" />
                    </div>
                    
                    {/* Experience section skeletons */}
                    <div className="mx-5 my-5 h-6 w-32 bg-gray-700/50 animate-pulse rounded" />
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="mx-5 mb-4 space-y-2">
                            <div className="h-5 w-3/4 bg-gray-700/50 animate-pulse rounded" />
                            <div className="h-4 w-1/4 bg-gray-700/50 animate-pulse rounded" />
                        </div>
                    ))}
                </section>

                {/* Right column */}
                <section className="col-span-1 min-h-96 lg:mr-28">
                    <div className="mx-5 my-4 h-6 w-32 bg-gray-700/50 animate-pulse rounded" />
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="mx-5 mb-4 space-y-2">
                            <div className="h-5 w-3/4 bg-gray-700/50 animate-pulse rounded" />
                            <div className="h-4 w-1/4 bg-gray-700/50 animate-pulse rounded" />
                        </div>
                    ))}
                </section>
            </div>
            <footer className="flex justify-center items-center h-16 bg-white/5">
                <div className="h-4 w-48 bg-gray-700/50 animate-pulse rounded" />
            </footer>
        </main>
    );
}