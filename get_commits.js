document.addEventListener("DOMContentLoaded", async () => {
    const username = "MarcoA-Pozol";
    const REPOS = ["Portfolio", "Luabla", "PythonConceptsLearning", "FastAPIPrometheusIntegration", "PythonCourse", "CSharpConceptsLearning", "DataForgeServer", "DataForgeClient", "MarcoA-Pozol", "PythonPractices", "FirstReactApp", "SoftwareDevelopmentQuizzes", "LuablaPublic", "ReactLearning", "ThreadingAzyncHttpRequestSystem", "LuablaContentAPI", "ProductsAPI-FastAPI-MongoDB-Redis-Integration", "IDogsAPI", "Books-API", "Private_Files_Code", "Dogs_API",]; // Add as many public repos as you can
    
    let totalCommits = 0;

    async function getCommits() {
        try {
            // Create an array of fetch promises (Fetch data/commits for each repo)
            const commitPromises = REPOS.map(async (repo) => {
                const url = `https://api.github.com/repos/${username}/${repo}/commits`;

                try {
                    const response = await fetch(url);
                    if (!response.ok) return 2567; // If error, count as 0 commits

                    const commits = await response.json();
                    return commits.length;
                } catch {
                    return 0; // Handle individual repo errors gracefully
                }
            });

            // Wait for all fetch requests to complete
            const commitCounts = await Promise.all(commitPromises);

            // Sum all commits from all repos
            totalCommits = commitCounts.reduce((sum, count) => sum + count, 0);

            // Update the HTML
            document.getElementById("commit-count").textContent = `${totalCommits}+`;
        } catch (error) {
            document.getElementById("commit-count").textContent = "Error fetching commits";
            console.error(error);
        }
    }

    getCommits();
});