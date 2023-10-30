import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Role } from '../enums/role.enum';

@Schema({
  timestamps: true,
})
export class Employee extends Document {
  @Prop({
    required: true,
    unique: true,
  })
  email: string;

  @Prop({
    required: true,
  })
  hash: string;

  @Prop({
    required: false,
    default: null,
  })
  firstName: string;

  @Prop({
    required: false,
    default: null,
  })
  lastName: string;

  @Prop({
    required: false,
    default: null,
  })
  roles: Role[];
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
