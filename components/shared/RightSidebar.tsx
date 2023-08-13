import { fetchCommunities } from '@/lib/actions/community.actions';
import CommunityCard from '../cards/CommunityCard';
import { fetchUsers } from '@/lib/actions/user.actions';
import UserCard from '../cards/UserCard';

async function RightSidebar() {
	const SuggestedCommunities = await fetchCommunities({
		searchString: '',
		pageNumber: 1,
		pageSize: 20,
		sortBy: 'desc',
	});
	const SuggestedUsers = await fetchUsers({
		userId: '',
		searchString: '',
		pageNumber: 1,
		pageSize: 25,
	});
	return (
		<section className="custom-scrollbar rightsidebar">
			<div className="flex flex-1 flex-col justify-start">
				<section className="relative">
					<h3 className="text-heading4-medium text-light-1">
						Suggested Communities
					</h3>
					<div className="mt-6 space-y-4">
						{SuggestedCommunities.communities.map((community) => (
							<CommunityCard
								key={community.id}
								id={community.id}
								name={community.name}
								username={community.username}
								imgUrl={community.image}
								bio={community.bio}
								members={community.members}
							/>
						))}
					</div>
				</section>
			</div>
			<div className="flex flex-1 flex-col justify-start">
				<h3 className="text-heading4-medium text-light-1">Suggested Users</h3>
				<div className="mt-6 space-y-4">
					{SuggestedUsers.users.map((person) => (
						<UserCard
							key={person.id}
							id={person.id}
							name={person.name}
							username={person.username}
							imgUrl={person.image}
							personType="User"
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default RightSidebar;
