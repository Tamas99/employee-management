import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Patch,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Employee } from './schemas/employee.schema';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../auth/enums/role.enum';

@Controller('employees')
@UseGuards(JwtAuthGuard)
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    return req.user;
  }

  @UseGuards(RolesGuard)
  @Roles(Role.Admin)
  @Get('role')
  async checkRole() {
    return 'Role is working';
  }

  @Get(':email')
  async getEmployee(
    @Param('email') email: string,
  ): Promise<Employee> {
    return this.employeesService.getEmployeeByEmail(email);
  }

  @Get()
  async getEmployees(): Promise<Employee[]> {
    return this.employeesService.getEmployees();
  }

  @Post()
  async createEmployee(
    @Body() createEmployeeDto: CreateEmployeeDto,
  ): Promise<Employee> {
    return this.employeesService.createEmployee(createEmployeeDto);
  }

  @Patch(':id')
  async updateEmployee(
    @Param('id') id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<Employee> {
    return this.employeesService.updateEmployee(id, updateEmployeeDto);
  }

  @Delete()
  async deleteEmployees() {
    this.employeesService.deleteEmployees({});
  }
}
