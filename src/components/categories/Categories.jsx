import { Card, CardContent, CircularProgress, Typography } from "@mui/material";
import useAsyncMock from "../../hooks/useAsyncMock";
import categories from '../../mocks/categorias.json';
import { Link } from "react-router-dom";

const Categories = () => {
    const { data, loading } = useAsyncMock(categories)

    if (loading) return <CircularProgress />

    return (<div className="container">
        <Typography variant="h2" style={{ color: "#8F8C8C" }}>
            Categorias
        </Typography>
        {
            data.map((category) => {
                return (
                    <Card key={category.id}>
                        <CardContent component={Link} to={`/category/${category.category}`}>
                            <button className="button1">{category.category}</button>
                        </CardContent>
                    </Card>
                )
            })
        }
    </div>);
}

export default Categories;