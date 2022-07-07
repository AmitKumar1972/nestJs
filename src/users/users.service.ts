import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepo:Repository<User>
    ){

    }

    userUpdate(req:any) {
        this.userRepo.createQueryBuilder()
        .update()
        .set({ name: req.name, email: req.email })
        .where('id= :id', {id: req.id})
        .execute();
        let msg={success:true,message:"inserted"};
        return msg;
    }

    userDelete(req:any) {
        this.userRepo.createQueryBuilder()
        .delete()
        .from(User)
        .where('id= :id', {id: req.id})
        .execute();
        let msg={success:true,message:"inserted"};
        return msg;
    }

    userAdd(req:any) {
        this.userRepo.createQueryBuilder()
        .insert() 
        .into(User)  
        .values([ { name: req.name, email: req.email } ]) 
        .execute(); 
        let msg={success:true,message:"inserted"};
        return msg;
    }
    getAllUser() {
        return this.userRepo.find();
        
    }
}
