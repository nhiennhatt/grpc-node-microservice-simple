import { IArticle } from "../../types/Article";
import { IsString, IsNotEmpty } from "class-validator";
import { Expose } from "class-transformer";

export class AddArticleValidation implements Pick<IArticle, "content" | "title">{
  @Expose()
  @IsString()
  @IsNotEmpty()
  content: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  title: string;
}
