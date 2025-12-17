import { Request, Response, NextFunction } from "express";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";

class ValidateDto {
    async validateDto(dtoClass: any, data: any) {
        let response = 'ok';
        const dto = plainToInstance(dtoClass, data);

        const errors = await validate(dto, {
            whitelist: true,
            forbidNonWhitelisted: true,
        });

        if(errors.length > 0){

            response = "Lo siguientes campos no están permitidos para este Endpoint: "
            errors.forEach(
                function (error) {
                    response += error.property + " ";
                }
            )
        }

        return response;
    }
}

export default new ValidateDto();