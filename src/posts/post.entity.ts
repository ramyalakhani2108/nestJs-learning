import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PostType } from './enums/postType.enum';
import { Status } from './enums/postStatus.enum';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { User } from 'src/users/user.entity';
import { Tag } from 'src/tags/tag.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 512,
    nullable: false,
  })
  title: string;

  @Column({
    type: 'enum',
    enum: PostType,
    default: PostType.POST,
    nullable: false,
  })
  postType: PostType;

  @Column({
    type: 'varchar',
    length: 256,
    unique: true,
    nullable: false,
  })
  slug: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.DRAFT,
    nullable: false,
  })
  status: Status;

  @Column({
    type: 'text',
    nullable: true,
  })
  content?: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  schema?: string;

  @Column({
    type: 'varchar',
    length: 1024,
    nullable: true,
  })
  featuredImageUrl?: string;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  publishedOn?: Date;

  // @OneToOne(() => MetaOption, { cascade: ['insert', 'update'] }) //cascade for specific actions
  @OneToOne(() => MetaOption, (metaoptions) => metaoptions.post, {
    cascade: true,
    eager: true,
  }) //cascade for all actions
  /* @JoinColumn() */
  metaOptions?: MetaOption;

  @ManyToOne(() => User, (author) => author.posts, { eager: true })
  author: User;

  @ManyToMany(() => Tag, (tag) => tag.posts, { eager: true })
  @JoinTable()
  tags?: Tag[];
}
