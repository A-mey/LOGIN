"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetError {
    constructor() { }
    getError(error) {
        let err = "";
        try {
            switch (error.keyword) {
                case 'additionalProperties':
                    err = `Unable to find property ${error.params.additionalProperty}`;
                    break;
                case 'required':
                    err = `Missing property ${error.params.missingProperty}`;
                    break;
                case 'type':
                case 'format':
                case 'enum':
                    err = `Invalid type for property ${error.instancePath}`;
                    break;
                default:
                    err = "Unknown error";
            }
        }
        catch (e) {
            console.log(e);
            err = "Unknown error";
        }
        return err;
    }
}
exports.default = new GetError();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0RXJyb3Iuc2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21tb24vc2VydmljZXMvZ2V0RXJyb3Iuc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxNQUFNLFFBQVE7SUFDVixnQkFBZSxDQUFDO0lBRWhCLFFBQVEsQ0FBQyxLQUFrQjtRQUN2QixJQUFJLEdBQUcsR0FBVyxFQUFFLENBQUM7UUFDckIsSUFBSTtZQUNBLFFBQU8sS0FBSyxDQUFDLE9BQU8sRUFBRTtnQkFDbEIsS0FBSyxzQkFBc0I7b0JBQ3ZCLEdBQUcsR0FBRywyQkFBMkIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFBO29CQUNsRSxNQUFNO2dCQUNWLEtBQUssVUFBVTtvQkFDWCxHQUFHLEdBQUksb0JBQW9CLEtBQUssQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUE7b0JBQ3pELE1BQU07Z0JBQ1YsS0FBSyxNQUFNLENBQUM7Z0JBQ1osS0FBSyxRQUFRLENBQUM7Z0JBQ2QsS0FBSyxNQUFNO29CQUNQLEdBQUcsR0FBRyw2QkFBNkIsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFBO29CQUN2RCxNQUFNO2dCQUNWO29CQUNJLEdBQUcsR0FBRyxlQUFlLENBQUE7YUFFNUI7U0FDSjtRQUNELE9BQU0sQ0FBQyxFQUFFO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLEdBQUcsR0FBRyxlQUFlLENBQUE7U0FDeEI7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7Q0FDSjtBQUVELGtCQUFlLElBQUksUUFBUSxFQUFFLENBQUEifQ==