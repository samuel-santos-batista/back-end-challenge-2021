
import { prop, Ref } from '@typegoose/typegoose';

import { User } from './User';

class UserToken {
  @prop({ ref: String })
  public readonly id!: string;

  @prop({ ref: User })
  public user: Ref<User>;

  @prop()
  public refreshToken: string;

  @prop()
  public expiresDate: Date;

  @prop({ default: Date.now() })
  public createdAt: Date;
}

export { UserToken };
