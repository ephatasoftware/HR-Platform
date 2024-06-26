
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, User } from "@prisma/client";

export class UserServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.UserCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserCountArgs>
  ): Promise<number> {
    return this.prisma.user.count(args);
  }

  async users<T extends Prisma.UserFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFindManyArgs>
  ): Promise<User[]> {
    return this.prisma.user.findMany(args);
  }
  async user<T extends Prisma.UserFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFindUniqueArgs>
  ): Promise<User | null> {
    return this.prisma.user.findUnique(args);
  }
  async createUser<T extends Prisma.UserCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserCreateArgs>
  ): Promise<User> {
    return this.prisma.user.create<T>(args);
  }
  async updateUser<T extends Prisma.UserUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserUpdateArgs>
  ): Promise<User> {
    return this.prisma.user.update<T>(args);
  }
  async deleteUser<T extends Prisma.UserDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserDeleteArgs>
  ): Promise<User> {
    return this.prisma.user.delete(args);
  }
}
