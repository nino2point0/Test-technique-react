import './index.scss';
import React, { useEffect, useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import { ArrowForward, Close } from '@material-ui/icons';
import Collapse from '@material-ui/core/Collapse';

type Props = {
  title: String,
  content: String,
  index: number,
  updateNumberOfOpened: Function,
  close: Boolean
};

const Card = ({ title, content, index, updateNumberOfOpened, close }: Props) => {
  const [isChecked, setIsChecked] = useState<Number>(-1);

  useEffect(() => {
    if (close && isChecked !== -1) {
      setIsChecked(-1);
    }
  }, [close, isChecked])

  const handleClick = () => {
    updateNumberOfOpened(isChecked === -1 ? false : true);
    setIsChecked(isChecked === -1 ? 1 : -1);
  }

  return (
    <div className='Card' key={`todo-nb-${index}`}>
      <ListItem key={`todo-nb-${index}`} role={undefined}>
        <ListItemText id={`${index}`} primary={`${title}`} />
        {isChecked === -1
          && <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="expand" onClick={handleClick}>
              <ArrowForward />
            </IconButton>
          </ListItemSecondaryAction>
        }
      </ListItem>
      <Collapse in={isChecked === 1} className='Card__expanded' timeout="auto" unmountOnExit>
        <List>
          <ListItem>
            <ListItemText secondary={content} />
          </ListItem>
          <ListItem>
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="expand" onClick={handleClick}>
                <Close />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Collapse>
    </div>
  );
}

export default Card;
