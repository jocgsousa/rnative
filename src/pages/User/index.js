import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    Container,
    Header,
    Avatar,
    Name,
    Bio,
    Stars,
    Starred,
    OwnerAvatar,
    Info,
    Title,
    Autor,
    Loading,
} from './styles';
import api from '../../services/api';

export default class User extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.getParam('user').name,
    });

    static propTypes = {
        navigation: PropTypes.shape({
            getParam: PropTypes.func,
        }).isRequired,
    };

    state = {
        stars: [],
        loading: false,
        page: 1,
        blocked: false,
    };

    async componentDidMount() {
        this.setState({ loading: true });

        const { navigation } = this.props;

        const { page } = this.state;

        user = navigation.getParam('user');

        const response = await api.get(`/users/${user.login}/starred`);

        this.setState({ stars: response.data, loading: false });
    }

    async addPage() {
        const { blocked } = this.state;
        if (blocked !== false) {
            const { page } = this.state;
            this.setState({ page: page + 1 });

            this.setState({ loading: true });

            const { navigation } = this.props;
            const { stars } = this.state;

            user = navigation.getParam('user');

            const response = await api.get(
                `/users/${user.login}/starred?page=${page}`
            );
            if (response.data !== null) {
                this.setState({ stars: response.data, loading: false });
            } else {
                this.setState({ blocked: true });
            }
        }
    }

    render() {
        const { navigation } = this.props;
        const { stars, loading } = this.state;
        const user = navigation.getParam('user');

        return (
            <Container>
                <Header>
                    <Avatar source={{ uri: user.avatar }} />
                    <Name>{user.name}</Name>
                    <Bio>{user.bio}</Bio>
                </Header>

                {loading ? (
                    <Loading />
                ) : (
                    <Stars
                        data={stars}
                        keyExtractor={(star) => String(star.id)}
                        renderItem={({ item }) => (
                            <Starred>
                                <OwnerAvatar
                                    source={{ uri: item.owner.avatar_url }}
                                />
                                <Info>
                                    <Title>{item.name}</Title>
                                    <Autor>{item.owner.login}</Autor>
                                </Info>
                            </Starred>
                        )}
                        onEndReached={() => this.addPage()}
                    />
                )}
            </Container>
        );
    }
}
