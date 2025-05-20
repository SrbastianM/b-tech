import { sql } from 'drizzle-orm';
import {
  mysqlTable,
  serial,
  text,
  datetime,
  varchar,
  mysqlEnum,
} from 'drizzle-orm/mysql-core';

export const posts = mysqlTable('posts', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  tag: text('tag').notNull(),
  create_at: datetime('create_at').default(sql`CURRENT_TIMESTAMP`),
});

export const users = mysqlTable('users', {
  id: serial('id').primaryKey(),
  username: varchar('username', { length: 50 }).notNull().unique(),
  email: varchar('email', { length: 100 }).notNull().unique(),
  passwordHash: varchar('password_hash', { length: 255 }).notNull(),
  role: mysqlEnum('role', ['user', 'admin']).default('user'),
});
