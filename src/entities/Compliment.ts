import { Entity , PrimaryColumn, Column, CreateDateColumn, JoinColumn, ManyToOne, ManyToMany} from "typeorm";
import { v4 as uuid } from "uuid";
import { ComplimentType } from "./ComplimentType";
import { User } from "./User";

@Entity("compliments")
class Compliment {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    user_sender: string;

    @JoinColumn({name: "user_sender"})
    @ManyToOne(() => User)
    userSender: User;

    @Column()
    user_receiver: string;

    @JoinColumn({name: "user_receiver"})
    @ManyToOne(() => User)
    userReceiver: User;

    @Column()
    compliment_type_id: string;

    @JoinColumn({name: "compliment_type_id"})
    @ManyToOne(() => ComplimentType)
    compliment_type: ComplimentType;

    @Column()
    message: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        } else {
            
        }
    }
}

export { Compliment }