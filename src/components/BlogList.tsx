import { useBlogs } from "../hooks/useBlogs";

export function BlogList() {
    const { data, isLoading, error } = useBlogs();

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error instanceof Error) {
        return <p>Error: {error.message}</p>;
    }
    return (
        <div>
            <h1>Blogs</h1>
            <ul>
                {data?.map((blog) => (
                    <li key={blog.id}>{blog.title}</li>
                ))}
            </ul>
        </div>
    );
}