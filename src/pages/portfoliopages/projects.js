import React from 'react'
import Grid from '@mui/material/Grid2';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { jsonData } from '..';
import { corpJson } from '..';
import { useContext } from 'react';
import Divider from "@mui/material/Divider";
import { myTheme } from '@/Providers/ThemeContext';

export default function Projects() {
    const { theme } = useContext(myTheme)
    const jsonArray = useContext(jsonData)
    const CompanyArray = useContext(corpJson)

    const projectClassName = theme === 'light'
        ? 'light-theme'
        : theme === 'dark'
            ? 'dark-theme'
            : 'funky-theme';
    return (
        <div className={`${projectClassName}`}>
            <Box >
                <Grid container spacing={2}>
                    <Grid size={{ xs: 6, md: 4 }}>
                        <h2>Personal Projects</h2>
                        <Card id="cardId" className={`${projectClassName}`} sx={{ minWidth: 275 }}>
                            <CardContent>
                                <div className={`${projectClassName}`}>
                                    {jsonArray.map((items) => (
                                        <div key={items.id}>
                                            <h3>{items.title}</h3>
                                            <div>
                                                <ul>

                                                <li>{items.description}</li>
                                                <li>{items.detailed_description}</li>
                                                <li>{items.usage}</li>
                                                <li><a href={items.link} target='_blank'>Try the {items.title} by Udyam</a></li>
                                                <li>Code link: <a href={items.git_code} target="_blank">View on GitHub</a></li>
                                                </ul>
                                            </div>
                                            <Divider sx={{ borderBottomWidth: 10 }} />
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid size={{ xs: 6, md: 8 }}>
                        <h2>Company Projects</h2>
                        <Card id="cardId" className={`${projectClassName}`} sx={{ minWidth: 275 }}>
                            <CardContent>
                                {CompanyArray.map((items) => (
                                    <div className={`${projectClassName}`} key={items.id}>
                                        <h3>{items.title}</h3>
                                        <div>
                                            <ul>
                                                <li>
                                                    {items.description}
                                                </li>
                                                <li>{items.detailed_description}</li>
                                                <li>
                                                    {items.usage}
                                                </li>
                                                <li>{items.tech_stack}</li>
                                            </ul>

                                        </div>
                                        <Divider sx={{ borderBottomWidth: 10 }} />
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}