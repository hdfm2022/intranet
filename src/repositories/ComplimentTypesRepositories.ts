import { Entity, EntityRepository, Repository } from "typeorm";
import { ComplimentType } from "../entities/ComplimentType";

@EntityRepository(ComplimentType)
class ComplimentTypesRepositories extends Repository<ComplimentType> {

}

export { ComplimentTypesRepositories };