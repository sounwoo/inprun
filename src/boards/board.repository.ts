import { User } from 'src/auth/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { BoardStatus } from './boaed-status.eunm';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dtd';

@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {
  async createBoard(CreateBoardDto: CreateBoardDto, user: User): Promise<Board> {
    const { title, description } = CreateBoardDto;

    const board = this.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
      user
    });
    await this.save(board);
    return board;
  }
}
