/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AdminWhereUniqueInput } from "../../admin/base/AdminWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { MessageUpdateManyWithoutChatRoomsInput } from "./MessageUpdateManyWithoutChatRoomsInput";
import { VisitorWhereUniqueInput } from "../../visitor/base/VisitorWhereUniqueInput";

@InputType()
class ChatRoomUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AdminWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AdminWhereUniqueInput)
  @IsOptional()
  @Field(() => AdminWhereUniqueInput, {
    nullable: true,
  })
  admin?: AdminWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => MessageUpdateManyWithoutChatRoomsInput,
  })
  @ValidateNested()
  @Type(() => MessageUpdateManyWithoutChatRoomsInput)
  @IsOptional()
  @Field(() => MessageUpdateManyWithoutChatRoomsInput, {
    nullable: true,
  })
  messages?: MessageUpdateManyWithoutChatRoomsInput;

  @ApiProperty({
    required: false,
    type: () => VisitorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => VisitorWhereUniqueInput)
  @IsOptional()
  @Field(() => VisitorWhereUniqueInput, {
    nullable: true,
  })
  visitor?: VisitorWhereUniqueInput | null;
}

export { ChatRoomUpdateInput as ChatRoomUpdateInput };
