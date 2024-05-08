import { Box, Divider, IconButton, Tooltip, Typography } from "@mui/material";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import React from "react";
import { ListPosts } from "@/api/strapi/posts";

// interface SocialMedia {
//     twitter: string;
//     linkedin: string;
//     github: string;
//   }
  
  interface ContentProps {
    title: string;
    content: string;
    likes: number;
    //comments: number;
    date: string;
    image: string;
    author: string;
    //socialMedia: SocialMedia;
  }

export const CardContent = ({
    title,
    content,
    likes,
    date,
    image,
    author,
}: ContentProps) => {
    const [liked, setLiked] = React.useState(false);
    const handleLike = () => {
        setLiked(!liked);
    }
    return (
        <Box sx={{ height: '90px'}}>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <Typography variant="h5" sx={{cursor: 'pointer', '&:hover': { textDecoration: 'underline' }}}>
                    {title}
                </Typography>
                <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center', justifyContent: 'center'}}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                        {
                            liked ? (
                                <Tooltip title="Unlike" placement="top" arrow>
                                    <IconButton>
                                        <FavoriteOutlinedIcon onClick={handleLike} sx={{cursor: 'pointer', color: 'red'}}/>
                                    </IconButton>
                                </Tooltip>
                            ) : (
                                <Tooltip title="Like" placement="top" arrow>
                                    <IconButton>
                                        <FavoriteBorderOutlinedIcon onClick={handleLike} sx={{cursor: 'pointer'}}/>
                                    </IconButton>
                                </Tooltip>
                            )
                            
                        }
                        <span style={{fontWeight: 600}}>{likes}</span>
                    </Box>
                    <Tooltip title="Share content" placement="top" arrow>
                        <IconButton>
                            <ShareOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>
            <Box>
                <Typography variant="body1" sx={{ width: '60%', height: '50px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', wordBreak: 'break-word'}}>
                    {content}
                </Typography>
            </Box>
            <Divider />
        </Box>
    )
}