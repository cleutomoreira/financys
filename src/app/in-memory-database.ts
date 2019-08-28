import { InMemoryDbService } from "angular-in-memory-web-api";
import { } from "./pages/categories/shared/category.model";
export class InMemoryDatabase implements InMemoryDbService{
    createDb(){
        const categories = [
            { id :1 , name: "Lazer", description: "fazenda"},
            { id :2 , name: "Saude", description: " Plano saude "},
            { id :3 , name: "moradia", description: "apartamento"},
            { id :4 , name: "Salário", description: " pagamento salario"},
            { id :5 , name: "Freelas", description: "servicos freelancer"}
        ];

        return { categories }
    }
}