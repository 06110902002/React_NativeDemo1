

/**
 * 大学数据模型
 */
import BaseModel from './BaseModel'
import ModelType from "./ModelType";
export default class UniversityModel extends BaseModel{

    constructor(){
        super();
        this.universityName = '';
        this.place = '';
    };

    getItemType(){
        return ModelType.University;
    };
}